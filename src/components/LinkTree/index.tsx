import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faSteam, faLastfm, faSpotify, faTwitch, faSoundcloud } from "@fortawesome/free-brands-svg-icons";

const LinkTree = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`

const Links = styled.a`
    text-decoration: none;
    list-style: none;
    color: white;
    font-size: 30px;
`

export const LinkTreeContent = () => {
    return(
        <LinkTree>
            <div>
                <Links href={'https://steamcommunity.com/id/talonabuser/'} target={'_blank'}>
                    <FontAwesomeIcon icon={faSteam} />
                </Links>
            </div>
            <div>
                <Links href={'https://www.twitch.tv/kingunmei/about'} target={'_blank'}>
                    <FontAwesomeIcon icon={faTwitch} />
                </Links>
            </div>
            <div>
                <Links href={'https://open.spotify.com/user/8s6mlw116mucypnn64v72we6w'} target={'_blank'}>
                    <FontAwesomeIcon icon={faSpotify} />
                </Links>
            </div>
            <div>
                <Links href={'https://www.last.fm/user/Massacrar'} target={'_blank'} >
                    <FontAwesomeIcon icon={faLastfm} />
                </Links>
            </div>
            <div>
                <Links href={'https://soundcloud.com/esreichtnicht'} target={'_blank'}>
                    <FontAwesomeIcon icon={faSoundcloud} />
                </Links>
            </div>
        </LinkTree>
    );
};